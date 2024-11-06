import {axiosGet} from "./base-service";

class FeedbackAPI {
    getAll = async () => {
        return await axiosGet(
            "/feedbacks?Rating=5&IsPagination=true&PageNumber=1&PageSize=8",
            {}
        );
    };
}

const FeedbackService = new FeedbackAPI();
export default FeedbackService;
