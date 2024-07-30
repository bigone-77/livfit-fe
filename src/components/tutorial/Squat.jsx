import React from 'react';
import { ExerciseContainer, HeroShot, MainTitle, MiniDivContainer, BasicContainer, AdvancedContainer } from './ExerciseStyles';
import BackButton from './BackButton';
import ExerciseCard from './ExerciseCard';
import StateCard from './StateCard';

import squatMain from '/src/assets/images/tutorial/squatmain.png';
import basicSquat from '/src/assets/images/tutorial/squat1.png'
import halfSquat from '/src/assets/images/tutorial/squat2.png'
import wideSquat from '/src/assets/images/tutorial/squat3.png'

export default function Squat() {
    return (
        <ExerciseContainer>
            <HeroShot>
                <BackButton/>
                <img className='mainImage' src={squatMain}/>
            </HeroShot>
            <MiniDivContainer>
                <StateCard
                    text1="카테고리"
                    title="하체"
                    text2=" Lower"
                />
                <StateCard
                    text1="레벨"
                    title="중급자"
                    text2=" Intermediate"
                />
            </MiniDivContainer>
            <BasicContainer>
                <MainTitle>베이직</MainTitle> 
                <ExerciseCard
                    img={basicSquat}
                    title="기본 스쿼트"
                    text1="Basic Squat"
                    text2="3set 15min"
                    navigateTo="/exercise/detail/1" 
                />
            </BasicContainer>
            <AdvancedContainer>
                 <MainTitle>응용 동작</MainTitle> 
                 <ExerciseCard
                    img={halfSquat}
                    title="하프 스쿼트"
                    text1="Half Squat"
                    text2="3set 10min"
                    navigateTo="/exercise/detail/2" 
                />
                <ExerciseCard
                    img={wideSquat}
                    title="와이드 스쿼트"
                    text1="Wide Squat"
                    text2="3set 12min"
                    navigateTo="/exercise/detail/3" 
                />
            </AdvancedContainer>
        </ExerciseContainer>
    );
}
