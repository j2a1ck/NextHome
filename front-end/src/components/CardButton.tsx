interface CardButtonProps {
  children: React.ReactNode;
}
const CardButton = ({ children }: CardButtonProps) => {
  return (
    <button className="mt-[4px] h-[22px] w-[100px] items-center rounded-lg bg-[#88D3FB] text-sm font-light">
      {children}
    </button>
  );
};

export default CardButton;
