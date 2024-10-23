import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useState,
} from "react";

interface ITimerContext {
  duration: number;
  setDuration: Dispatch<React.SetStateAction<number>>;
}

export const TimerContext = createContext<ITimerContext>({
  duration: 10,
  setDuration: () => {},
});

export const TimerContextProvider = ({ children }: { children: ReactNode }) => {
  const [duration, setDuration] = useState(10);

  return (
    <TimerContext.Provider value={{ duration, setDuration }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  const { duration, setDuration } = useContext(TimerContext);
  return { duration, setDuration };
};
