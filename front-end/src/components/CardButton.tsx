interface CardButtonProps {
    children: React.ReactNode
}
const CardButton = ({ children }: CardButtonProps) => {
  return (
    <button className="h-[22px] w-[100px] mt-[4px] rounded-lg font-light text-sm items-center bg-[#88D3FB]">
      {children}
    </button>
  );
};

export default CardButton