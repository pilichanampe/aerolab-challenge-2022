import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToastContext } from "../context/ToastContext";
import styled from "styled-components";
import { Image } from "./basecomponents/Image";
import { Spacer } from "./basecomponents/Spacer";
import { Text } from "./basecomponents/Text";

const ListContainer = styled.ul`
  border: 2px solid purple;
`;

const Item = styled(motion.li)`
  border: 2px solid orange;
  width: 538px;
  height: 80px;
`;

const Icon = styled(Image)`
  width: 26px;
  height: 26px;
`;

const CrossButton = styled.button`
  border: 0;
  width: auto;
  height: auto;
  background: none;
  color: ${({ theme}) => theme.colors.n600};
`

export const Toast = ({ error }) => {
  const { notifications, setNotifications, addNotification, removeNotification } = useToastContext(); // array con todas las notificaciones;

  const handleRemoveNotification = (e, id) => {
    e.stopPropagation();
    setNotifications([...notifications].filter((item, index) => index !== id));
  };

  return (
    <div className="container toast">
      <ul>
        <AnimatePresence initial={false}>
          {notifications &&          
          notifications.map((notification, index) => (
            <motion.li
              key={index}
              positionTransition
              id={index}
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            >
              <Icon
                src={error ? './icons/system-error.svg' : './icons/system-success.svg'}
              ></Icon>
              <Text
                width="100%"
                ml="15px"
              >{notification}</Text>              
              <CrossButton
                onClick={(e) => handleRemoveNotification(e, index)}
              >
                <Icon
                  src="./icons/cross-default.svg"
                ></Icon>
              </CrossButton>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

Toast.defaultProps = {
  error: false,
};