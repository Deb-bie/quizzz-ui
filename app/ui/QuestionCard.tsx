'use client'
import { useState } from "react"
import {QuestionData} from "@/app/lib/data"
import { AnswerCard } from "./AnswerCard";


export default function QuestionCard (){
    const [answerBackgroundColor, setAnswerBackgroundColor] = useState("#bfdbfe1a"); 

    const handleAnswerClick = () => {
        setAnswerBackgroundColor((prevColor) => prevColor == "#3b82f680" ? "#bfdbfe1a" : "#3b82f680");
    }
    

    return (
        <main className="w-full h-screen flex flex-row justify-center overflow-auto bg-white">
            <div className="m-4 lg:max-w-7xl w-full flex flex-col justify-between ">

                {QuestionData.map((data) => {
                    var currentQuestionNumber = QuestionData.findIndex((question) => question == data) + 1;
                    var totalNumberOfQuestions = QuestionData.length;
                    return (
                        <div className="w-full h-full flex flex-col justify-between">
                            <div className="w-full mt-12 flex flex-row justify-start">
                                <div className="text-lg lg:text-3xl border-[1px] border-blue-100 rounded-[50%] px-4 lg:px-8 py-6 lg:py-12">
                                    {currentQuestionNumber} / {totalNumberOfQuestions}
                                </div>
                            </div>

                            <div className="text-center text-2xl lg:text-5xl font-bold ">
                                {data.question}
                            </div>

                            <div className="w-full flex flex-row justify-center">
                                <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                                    {data.answers.map((answer, id) => (
                                        <AnswerCard 
                                            key={answer.answer_id}
                                            answer={answer.answer}
                                            bgColor={answerBackgroundColor}
                                            handleAnswer={handleAnswerClick}
                                        
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>timer bar</div>
                        
                        </div>
                    );
                }
                )}
            </div>
        </main>
    );
}


                