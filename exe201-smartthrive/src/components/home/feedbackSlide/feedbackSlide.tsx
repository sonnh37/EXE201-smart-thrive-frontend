import TestimonialWithRating from "@/components/testimonialWithRating";
import FeedbackService from "@/services/feedback-service";
import {Feedback} from "@/services/model/feedback";
import React, {useEffect, useState} from "react";

const {Splide, SplideSlide} = require("@splidejs/react-splide");
const FeedbackSlide = () => {
    const [feedbackList, setFeedbackList] = useState<Feedback[] | null>(null);
    useEffect(() => {
        const fetchDate = async () => {
            const result = await FeedbackService.getAll();
            setFeedbackList(result.results);
        };
        fetchDate();
    }, []);
    return (
        <div className="text-black my-12 ">
            <div className="flex flex-col mx-32  text-center">
                <div
                    className="text-lg font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    Phản hồi
                </div>
                <div className="text-[2rem] w-full text-wrap mt-4 font-bold leading-9">
                    Những người dùng đã nói gì về chúng tôi
                </div>
            </div>
            <div>
                {feedbackList && (
                    <Splide
                        options={{
                            type: "loop",
                            perPage: 3,
                            focus: "center",
                            autoplay: true,
                            gap: "2rem",
                            interval: 8000,
                            flickMaxPages: 3,
                            updateOnMove: true,
                            pagination: false,
                            padding: "10%",
                            throttle: 300,
                            breakpoints: {
                                1440: {
                                    perPage: 1,
                                    padding: "30%",
                                },
                            },
                        }}
                    >
                        {feedbackList.map((feedback) => (
                            <SplideSlide key={feedback.id}>
                                <TestimonialWithRating
                                    courseName={
                                        feedback.course
                                            ? feedback.course.name!
                                            : "Not available course"
                                    }
                                    content={feedback.description!}
                                    name={
                                        feedback.student
                                            ? feedback.student.studentName!
                                            : "Anonymous"
                                    }
                                    rating={5}
                                    role="Student"
                                />
                            </SplideSlide>
                        ))}
                    </Splide>
                )}
            </div>
        </div>
    );
};

export default FeedbackSlide;
