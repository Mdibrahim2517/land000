import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    getPostTagsLoading: false,
    postTags: [],
    serviceLocationsLoading: false,
    serviceLocations: [],
    professionsLoading: false,
    professions: [],
    inquiryStatus: null,
    error: null,
};

const utilSlice = createSlice({
    name: 'utility',
    initialState,
    reducers: {
        // Fetch post tags
        getPostTagsStart: (state) => {
            state.getPostTagsLoading = true;
        },
        getPostTagsSuccess: (state, action) => {
            state.getPostTagsLoading = false;
            state.postTags = action.payload;
        },
        getPostTagsFail: (state, action) => {
            state.getPostTagsLoading = false;
            state.error = action.payload;
        },

        // Fetch service locations
        getServiceLocationsStart: (state) => {
            state.serviceLocationsLoading = true;
        },
        getServiceLocationsSuccess: (state, action) => {
            state.serviceLocationsLoading = false;
            state.serviceLocations = action.payload;
        },
        getServiceLocationsFail: (state, action) => {
            state.serviceLocationsLoading = false;
            state.error = action.payload;
        },

        // Fetch professions
        getProfessionsStart: (state) => {
            state.professionsLoading = true;
        },
        getProfessionsSuccess: (state, action) => {
            state.professionsLoading = false;
            state.professions = action.payload;
        },
        getProfessionsFail: (state, action) => {
            state.professionsLoading = false;
            state.error = action.payload;
        },

        // Add inquiry
        addInquiryStart: (state) => {
            state.inquiryStatus = null;
        },
        addInquirySuccess: (state) => {
            state.inquiryStatus = 'success';
        },
        addInquiryFail: (state) => {
            state.inquiryStatus = 'error';
        },
    },
});

export const {
    getPostTagsStart,
    getPostTagsSuccess,
    getPostTagsFail,
    getServiceLocationsStart,
    getServiceLocationsSuccess,
    getServiceLocationsFail,
    getProfessionsStart,
    getProfessionsSuccess,
    getProfessionsFail,
    addInquiryStart,
    addInquirySuccess,
    addInquiryFail,
} = utilSlice.actions;

export default utilSlice.reducer;