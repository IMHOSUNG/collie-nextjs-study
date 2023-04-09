
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
