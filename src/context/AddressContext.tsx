// AddressContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AddressContextType {
  userAddress: string;
  setUserAddress: (address: string) => void;
}

const AddressContext = createContext<AddressContextType>({
  userAddress: "",
  setUserAddress: () => {},
});

export const useAddress = () => useContext(AddressContext);

interface AddressProviderProps {
  children: ReactNode;
}

export const AddressProvider: React.FC<AddressProviderProps> = ({
  children,
}) => {
  const [userAddress, setUserAddress] = useState<string>("");

  return (
    <AddressContext.Provider value={{ userAddress, setUserAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
