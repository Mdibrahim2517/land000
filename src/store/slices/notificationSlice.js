import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notificationLoading: false,
    notifications: [],
    totalNotification: 0,
    currentPage: 1,
    error: null,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        // Fetch notifications
        fetchNotificationsStart: (state) => {
            state.notificationLoading = true;
        },
        fetchNotificationsSuccess: (state, action) => {
            state.notificationLoading = false;
            state.totalNotification = action.payload.count;
            state.currentPage = action.payload.page;
            state.notifications = action.payload.page > 1
                ? [...state.notifications, ...action.payload.notifications]
                : action.payload.notifications;
        },
        fetchNotificationsFail: (state, action) => {
            state.notificationLoading = false;
            state.error = action.payload;
        },

        // Read notifications
        readNotificationsStart: (state) => { },
        readNotificationsSuccess: (state, action) => {
            // Mark notifications as read
            state.notifications = state.notifications.map((notification) =>
                action.payload.includes(notification._id) ? { ...notification, read: true } : notification
            );
        },
        readNotificationsFail: (state, action) => {
            state.error = action.payload;
        },

        // Delete notifications
        deleteNotificationsStart: (state) => { },
        deleteNotificationsSuccess: (state, action) => {
            // Remove deleted notifications
            state.notifications = state.notifications.filter(
                (notification) => !action.payload.includes(notification._id)
            );
        },
        deleteNotificationsFail: (state, action) => {
            state.error = action.payload;
        },
    },
});

// Exporting actions to be used in sagas and components
export const {
    fetchNotificationsStart,
    fetchNotificationsSuccess,
    fetchNotificationsFail,
    readNotificationsStart,
    readNotificationsSuccess,
    readNotificationsFail,
    deleteNotificationsStart,
    deleteNotificationsSuccess,
    deleteNotificationsFail,
} = notificationSlice.actions;

export default notificationSlice.reducer;