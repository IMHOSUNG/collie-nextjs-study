
//? 가 붙은 것은 선택적 옵션
//https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/
type SortingCategory = 'recent' | 'popular'

export interface Content {
    uuid:string;
    title:string;
    author:string;
    date:Date;
    view_count:Number;
    like_count:Number;
    answer_count:Number;
    tag?:String[]
}

export interface ContentList {
    sorting:SortingCategory
    page_number:Number
    content_list:Content[]
}

export interface PageMeta {
    title: string;
    description: string;
    cardImage: string;
}

export interface AsideContent {
    link_url:string,
    name:string,
}

export interface AsideContentList {
    content:AsideContent[]
}

export interface AnswerContent {
    recommend_count:Number
    answer_block_uuid:string
    author_picked:boolean
    comment_blocks:string[]
}

export interface QuestionContent {
    question_uuid:string
    title:string
    create_time:string
    update_time:string
    author:string
    tags:string[]
    question_block_uuid:string
    best_answer_block_uuid:string
    answer_block:AnswerContent[]
}

export const SERVER_PATH = process.env.SERVER_PATH
