
export const AnswerCard = ({answer, bgColor, handleAnswer}) => {
    return (
        <div style={{ backgroundColor: bgColor }} className="border-[1px] border-blue-400 p-4 text-xl rounded-md cursor-pointer hover:scale-75 transition duration-700" onClick={handleAnswer} >
            {answer}
        </div>
    );
}