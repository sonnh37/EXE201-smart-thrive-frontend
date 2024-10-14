"use client";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {
    HightLightVideo2,
    HightLightVideo3,
    HightLightVideo4,
    pauseImg,
    playImg,
    replayImg,
} from "../../../utils/index";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const hightlightsSlides = [
    {
        id: 1,
        textLists: ["Enhence method.", "Enhence method.", "Enhence method."],
        video: HightLightVideo2,
        videoDuration: 13,
    },
    {
        id: 2,
        textLists: ["Enhence method.", "Enhence method.", "Enhence method."],
        video: HightLightVideo2,
        videoDuration: 13,
    },
    {
        id: 3,
        textLists: ["Enhence method.", "Enhence method.", "Enhence method."],
        video: HightLightVideo3,
        videoDuration: 6,
    },
    {
        id: 4,
        textLists: ["Enhence method.", "Enhence method.", "Enhence method."],
        video: HightLightVideo4,
        videoDuration: 10,
    },
];

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);
    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        isLastVideo: false,
        videoId: 0,
        isPlaying: false,
    });
    const [loadedData, setLoadedData] = useState([]);
    const {isEnd, isLastVideo, isPlaying, startPlay, videoId} = video;
    useGSAP(() => {
        gsap.to("#slider", {
            transform: `translateX(${-100 * videoId}%)`,
            duration: 2,
            ease: "power2.inOut",
        });

        gsap.to("#video", {
            scrollTrigger: {
                trigger: "#video",
                toggleActions: "restart none none none",
                // markers: true,
            },
            onComplete: () => {
                setVideo((prev) => ({
                    ...prev,
                    startPlay: true,
                    isPlaying: true,
                }));
            },
        });
    }, [isEnd, videoId]);
    useEffect(() => {
        let currentProgress = 0;
        let span = videoSpanRef.current;

        if (span[videoId]) {
            let anim = gsap.to(span[videoId], {
                onUpdate: () => {
                    const progress = Math.ceil(anim.progress() * 100);
                    if (progress != currentProgress) {
                        currentProgress = progress;
                    }

                    gsap.to(videoDivRef.current[videoId], {
                        width:
                            window.innerWidth < 760
                                ? "10vw"
                                : window.innerWidth < 1200
                                    ? "10vw"
                                    : "4vw",
                    });

                    gsap.to(span[videoId], {
                        width: `${currentProgress}%`,
                        background: "white",
                    });
                },

                onComplete: () => {
                    if (isPlaying) {
                        gsap.to(videoDivRef.current[videoId], {
                            width: "12px",
                        });
                        gsap.to(span[videoId], {
                            backgroundColor: "#afafaf",
                        });
                    }
                },
            });
            if (videoId == 0) {
                anim.restart();
            }
            const animUpdate = () => {
                if (videoRef.current[videoId] != null) {
                    anim.progress(
                        videoRef.current[videoId].currentTime /
                        hightlightsSlides[videoId].videoDuration
                    );
                }
            };

            if (isPlaying) {
                gsap.ticker.add(animUpdate);
            } else {
                gsap.ticker.remove(animUpdate);
            }
        }
    }, [videoId, startPlay]);

    useEffect(() => {
        if (loadedData.length > 3) {
            if (!isPlaying) {
                videoRef.current[videoId].pause();
            } else {
                startPlay && videoRef.current[videoId].play();
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData]);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.forEach((videoElement, index) => {
                if (videoElement) {
                    handleLoadedMetaData(index, videoElement);
                }
            });
        }
    }, []);
    const handleLoadedMetaData = (i, e) => {
        return setLoadedData((prev) => [...prev, e]);
    };

    const handleProcess = (type, i) => {
        switch (type) {
            case "video-end":
                setVideo((pre) => ({...pre, isEnd: true, videoId: i + 1}));
                break;

            case "video-last":
                setVideo((pre) => ({...pre, isLastVideo: true}));
                break;

            case "video-reset":
                setVideo((pre) => ({...pre, videoId: 0, isLastVideo: false}));
                break;

            case "pause":
                setVideo((pre) => ({...pre, isPlaying: !pre.isPlaying}));
                break;

            case "play":
                setVideo((pre) => ({...pre, isPlaying: !pre.isPlaying}));
                break;

            default:
                return video;
        }
    };
    return (
        <>
            <div className="flex items-center">
                {hightlightsSlides.map((list, i) => (
                    <div key={list.id} id="slider" className="sm:pr-20 pr-10">
                        <div className="video-carousel_container">
                            <div className="w-full h-full flex flex-row-reverse rounded-3xl overflow-hidden bg-black">
                                <video
                                    id="video"
                                    preload="auto"
                                    className={` pointer-events-none w-[60%] mx-4`}
                                    muted
                                    ref={(el) => {
                                        videoRef.current[i] = el;
                                    }}
                                    onPlay={() => {
                                        setVideo((prevVideo) => ({
                                            ...prevVideo,
                                            isPlaying: true,
                                        }));
                                    }}
                                    onEnded={() =>
                                        i !== 3
                                            ? handleProcess("video-end", i)
                                            : handleProcess("video-last")
                                    }
                                    src={list.video}
                                    onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                                >
                                    <source
                                        // onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                                        src={list.video}
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                            <div className="absolute top-20 left-[5%] z-10 flex">
                                <div className="videoText">
                                    {list.textLists.map((text, index) => {
                                        return (
                                            <p
                                                key={index}
                                                className={` ${
                                                    index == 0
                                                        ? "font-bold  text-2xl text-white"
                                                        : "font-medium  text-xl text-[#fff9]"
                                                }`}
                                            >
                                                {text}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative flex-center mt-10">
                <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full ">
                    {videoRef.current.map((_, i) => (
                        <span
                            key={i}
                            ref={(el) => (videoDivRef.current[i] = el)}
                            className="mx-2 h-3 w-3 bg-gray-200 rounded-full relative cursor-pointer"
                        >
              <span
                  className="absolute w-full h-full rounded-full"
                  ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
                    ))}
                </div>

                <button
                    onClick={
                        isLastVideo
                            ? () => handleProcess("video-reset")
                            : !isPlaying
                                ? () => handleProcess("play")
                                : () => handleProcess("pause")
                    }
                    className="control-btn"
                >
                    <img
                        src={
                            isLastVideo
                                ? replayImg.src
                                : !isPlaying
                                    ? playImg.src
                                    : pauseImg.src
                        }
                        alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
                        // onClick={
                        //   isLastVideo
                        //     ? () => handleProcess("video-reset")
                        //     : !isPlaying
                        //     ? () => handleProcess("play")
                        //     : () => handleProcess("pause")
                        // }
                    />
                </button>
            </div>
        </>
    );
};

export default VideoCarousel;
