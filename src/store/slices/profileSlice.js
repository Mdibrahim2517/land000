import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profileDetailsLoading: false,
    profileDetails: {},
    usersLoading: false,
    users: [],
    notFollowedUsersLoading: false,
    notFollowedUsers: [],
    error: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        // Fetch Profile Details
        profileDetailsStart: (state) => {
            state.profileDetailsLoading = true;
        },
        profileDetailsSuccess: (state, action) => {
            state.profileDetailsLoading = false;
            state.profileDetails = action.payload.data;
        },
        profileDetailsFail: (state, action) => {
            state.profileDetailsLoading = false;
        },

        // Fetch Users
        fetchUsersStart: (state) => {
            state.usersLoading = true;
        },
        fetchUsersSuccess: (state, action) => {
            state.usersLoading = false;
            const data = action.payload?.data || [];
            const { page, count } = data[0] || {};
            if (page) {
                if (page > 1) {
                    state.users = [...state.users, ...data];
                } else {
                    state.users = count === 0 ? [] : data
                }
            }
        },
        fetchUsersFail: (state, action) => {
            state.usersLoading = false;
            state.error = action.payload;
        },

        // Fetch Not Followed Users
        fetchNotFollowedUsersStart: (state) => {
            state.notFollowedUsersLoading = true;
        },
        fetchNotFollowedUsersSuccess: (state, action) => {
            state.notFollowedUsersLoading = false;
            state.notFollowedUsers = action.payload;
        },
        fetchNotFollowedUsersFail: (state, action) => {
            state.notFollowedUsersLoading = false;
            state.error = action.payload;
        },

        // Follow/Unfollow
        followStart: (state) => { },
        followSuccess: (state, action) => {
            const followedID = action.payload.followedID;
            const deleted = action.payload.deleted;

            // Update users list
            state.users = state.users.map((user) =>
                user._id === followedID
                    ? {
                        ...user,
                        isFollowing: deleted ? null : action.payload,
                        followers: deleted ? user.followers - 1 : user.followers + 1
                    }
                    : user
            );

            // Update profile details if the followed user is the current profile
            if (state.profileDetails?._id === followedID) {
                state.profileDetails = {
                    ...state.profileDetails,
                    isFollowing: deleted ? null : action.payload,
                    followers: deleted ? state.profileDetails.followers - 1 : state.profileDetails.followers + 1
                };
            }
        },
        followFail: (state, action) => {
            state.error = action.payload;
        },
    },
});

// Export actions for use in sagas
export const {
    profileDetailsStart,
    profileDetailsSuccess,
    profileDetailsFail,
    fetchUsersStart,
    fetchUsersSuccess,
    fetchUsersFail,
    fetchNotFollowedUsersStart,
    fetchNotFollowedUsersSuccess,
    fetchNotFollowedUsersFail,
    followStart,
    followSuccess,
    followFail
} = profileSlice.actions;

export default profileSlice.reducer;