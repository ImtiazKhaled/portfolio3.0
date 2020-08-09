declare module '*.pdf'

/// types for props

type Link = {
    link: string,
    linkText: string,
}

type TextParagraphProps = {
    type: string
    links: Array<Link>
    text: string
}

type Language = {
    key: string
    displayText: string
}

type LanguagePickerProps = {
    languages: Array<Language>
}

type ListParagraphProps = {
    main: TextParagraphProps,
    list: Array<TextParagraphProps>
}

type SocialLink = {
    type: string,
    link: string
}

type SocialLinksProps = {
    links: Array<SocialLink>
}

/// ends types for props