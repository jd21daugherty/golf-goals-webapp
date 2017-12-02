
export interface CourseOptionsModel{
    name: string;
    tee: string;
}

export interface StartRoundActionModel{
    type: string,
    course: CourseOptionsModel
}

export function startRound(courseOptions: CourseOptionsModel){
    return{
        type: "START_ROUND",
        course: courseOptions
    }
}

export function changeCourse(courseName: string){
    return {
        type: "CHANGE_COURSE",
        coursename: courseName
    }
}

export function changeTee(length: number){
    return {
        type: "CHANGE_TEE",
        teelength: length
    }
}