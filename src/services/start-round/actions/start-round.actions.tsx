
export interface CourseOptions{
    name: string;
    tee: string;
}

export function startRound(courseOptions: CourseOptions){
    return{
        type: "START_ROUND",
        course: courseOptions
    }
}