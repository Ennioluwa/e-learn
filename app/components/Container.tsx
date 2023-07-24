import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`px-5 md:px-20 xl:px-32 ${className}`}>
      <div className="container mx-auto max-w-7xl">{children}</div>
    </div>
  );
};

export default Container;
