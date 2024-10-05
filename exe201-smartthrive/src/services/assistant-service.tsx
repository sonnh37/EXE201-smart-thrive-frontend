import React from 'react'
import { axiosGet, axiosPost, axiosPut } from "./baseService";
import { Assistant } from './Model/Assistant';

class AssistantAPI {
    getAll = async () => {
        return await axiosGet(`/assistans`, {});
      };
    
    
      createAssistant = async (assistant: Assistant) => {
        return axiosPost("/assistants", {
          fullName: assistant.fullName,
          phone: assistant.phone,
          email: assistant.email,
        }, {});
      };
    
}
const AssistantService = new AssistantAPI;
export default AssistantService
