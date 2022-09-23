'use strict';

const markBtn = document.querySelector(".component-container__wrapper__header__mark-as-read")
const notifications = document.querySelectorAll(".component-container__wrapper__main__notification-container")
const redDot = document.querySelectorAll(".component-container__wrapper__main__notification-container__main__right-side__event__unread-dot")
const notificationsCount = document.querySelector(".component-container__wrapper__header__heading__notification-counter")
let unreadNotifications = document.querySelectorAll(".unread")

const renderUnreadNotifications = () => {
    notificationsCount.textContent = unreadNotifications.length;
}

renderUnreadNotifications();

const markAllAsRead = () => {
    notifications.forEach(notification => notification.classList.remove("unread"))
    redDot.forEach(dot => dot.remove())
    unreadNotifications = [];
    renderUnreadNotifications();
}
