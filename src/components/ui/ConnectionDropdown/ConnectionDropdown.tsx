import React, { useState } from "react";

import { CONNECTION_TYPES } from "../../../constans/graph";

import styles from "./ConnectionDropdown.module.scss";

interface ConnectionDropdownProps {
  selectedTopic: string;
  onConnectionSelect: (connectionType: string) => void;
  isVisible: boolean;
  position: { x: number; y: number };
  onClose: () => void;
}

const ConnectionDropdown: React.FC<ConnectionDropdownProps> = ({
  selectedTopic,
  onConnectionSelect,
  isVisible,
  position,
  onClose,
}) => {
  const [selectedConnection, setSelectedConnection] = useState<string>("");

  if (!isVisible) return null;

  const connectionTypes =
    CONNECTION_TYPES[selectedTopic as keyof typeof CONNECTION_TYPES] ||
    CONNECTION_TYPES.default;

  const handleConnectionSelect = (connectionType: string) => {
    setSelectedConnection(connectionType);
    onConnectionSelect(connectionType);
    onClose();
  };

  return (
    <>
      {/* Backdrop to close dropdown when clicking outside */}
      <div className={styles.backdrop} onClick={onClose} />

      <div
        className={styles.dropdown}
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          transform: "translateX(-50%)",
          zIndex: 1000,
        }}
      >
        <div className={styles.dropdownHeader}>
          <h4>Выберите тип связи</h4>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.dropdownContent}>
          {connectionTypes.map((connectionType, index) => (
            <button
              key={index}
              className={`${styles.connectionOption} ${
                selectedConnection === connectionType ? styles.selected : ""
              }`}
              onClick={() => handleConnectionSelect(connectionType)}
            >
              {connectionType}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ConnectionDropdown;
