import { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export function ToastProvider({ children }) { 
  const [notifications, setNotifications] = useState([]);

  let newIndex = 0;
  const addNotification = (newNotification) => {
    newIndex++;
    setNotifications([...notifications, newNotification]);
  };

  const removeNotification = (id) => {
    console.log('notificaciones en remove', notifications);
    // setNotifications(notifications.filter((item, index) => id !== index));
    // const newArr = [...arr];
    // notifications.splice(notifications.findIndex(item => item === notification), 1);
    // return newArr;
  };
  

    // const remove = (item) => {
    //   const notificationToRemove = notifications.filter(notification => notification === item);
    //   setNotifications(notifications.splice(notificationToRemove, 1));
    // };

  // const add = (newNotification) => {
  //   setNotifications([...notifications], newNotification);
  // };  
  
  return (
    <ToastContext.Provider
      value={{
        notifications,
        setNotifications,
        removeNotification,
        addNotification,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export function useToastContext() {
  return useContext(ToastContext);
};