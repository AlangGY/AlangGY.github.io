# Alang Blog

Alang Kim의 개발 관련 내용을 다루는 블로그입니다.

## Every Pages Needs To-be Static Generated

Alang Blog는 github page를 사용하여 호스팅됩니다.
Post의 생성은 markdown 파일을 통해 이루어지며, 이 markdown 파일을 기반으로 각 Post 페이지는 static generated 됩니다.

## Concept

하나의 글을 `Post`라고 부르며, `Post`는 다음과 같은 속성을 가집니다.

- `Title`: 글의 제목
- `Content`: 글의 내용
  - `Markdown` 형식을 기반으로 합니다.
  - `React Component`를 사용할 수 있습니다.
- `Tag`: 글의 태그
  - LLM모델을 이용하여 generate합니다.
  - Tag를 기반으로 한 인터렉티브한 기능이 제공됩니다.
- `Readability`: 글의 가독성
  - 글의 가독성을 측정하여 제공합니다. LLM모델을 사용합니다.
- `Difficulty`: 글의 난이도
  - 글의 난이도를 측정하여 제공합니다. LLM모델을 사용합니다.
- `Date`: 글의 작성일
- `Author`: 글의 작성자
- `Comment`: 글의 댓글
- `Like`: 글의 좋아요
- `Share`: 글의 공유
- `View`: 글의 조회수

## Tech Stack

- `NextJs`
- `TypeScript`
- `Panda CSS`

## Pages

- `Home`: 메인 페이지
- `Posts`: 글 페이지
- `Tags`: 태그 페이지
