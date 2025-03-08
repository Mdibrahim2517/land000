const themeTypography = (theme) => {
    return {
        fontFamily: "'Mulish', 'Open Sans', sans-serif",
        h8: {
            fontSize: '0.625rem', // 10px
            '@media (max-width: 600px)': {
                fontSize: '0.5rem', // Adjust for smaller screens
            },
        },
        h7: {
            color: theme.heading,
            fontSize: '0.75rem', // 12px
            '@media (max-width: 600px)': {
                fontSize: '0.625rem', // 10px
            },
        },
        h6: {
            color: theme.heading,
            fontSize: '0.875rem', // 14px
            lineHeight: '1.5em',
            '@media (max-width: 600px)': {
                fontSize: '0.75rem', // 12px
            },
        },
        h5: {
            fontSize: '1rem', // 16px
            color: theme.heading,
            '@media (max-width: 600px)': {
                fontSize: '0.875rem', // 14px
            },
        },
        h4: {
            fontSize: '1.125rem', // 18px
            color: theme.heading,
            '@media (max-width: 600px)': {
                fontSize: '1rem', // 16px
            },
        },
        h3: {
            fontSize: '1.5rem', // 24px
            color: theme.heading,
            fontWeight: '500',
            '@media (max-width: 600px)': {
                fontSize: '1.25rem', // 20px
            },
        },
        h2: {
            fontSize: '1.75rem', // 28px
            color: theme.heading,
            fontWeight: '500',
            '@media (max-width: 600px)': {
                fontSize: '1.5rem', // 24px
            },
        },
        h1: {
            fontSize: '2rem', // 32px
            color: theme.heading,
            fontWeight: '500',
            '@media (max-width: 600px)': {
                fontSize: '1.75rem', // 28px
            },
        },
        title: {
            fontSize: '3.625rem', // 58px
            color: theme.heading,
            fontWeight: '500',
            '@media (max-width: 960px)': {
                fontSize: '3rem', // 48px
            },
            '@media (max-width: 600px)': {
                fontSize: '2.25rem', // 36px
            },
        },
        subtitle1: {
            fontSize: '0.875rem', // 14px
            color: theme.textDark,
            '@media (max-width: 600px)': {
                fontSize: '0.75rem', // 12px
            },
        },
        subtitle2: {
            fontSize: '0.75rem', // 12px
            fontWeight: 400,
            color: theme.darkTextSecondary,
            '@media (max-width: 600px)': {
                fontSize: '0.625rem', // 10px
            },
        },
        caption: {
            fontSize: '0.75rem', // 12px
            color: theme.darkTextSecondary,
            fontWeight: 400,
            '@media (max-width: 600px)': {
                fontSize: '0.625rem', // 10px
            },
        },
        body1: {
            fontSize: '1rem', // 16px
            fontWeight: 400,
            '@media (max-width: 960px)': {
                fontSize: '0.875rem', // 14px
            },
        },
        body2: {
            fontSize: '0.875rem', // 14px
            fontWeight: 400,
            color: theme.darkTextPrimary,
            '@media (max-width: 600px)': {
                fontSize: '0.75rem', // 12px
            },
        },
        button: {
            textTransform: 'capitalize',
            fontSize: '0.875rem', // 14px
            '@media (max-width: 600px)': {
                fontSize: '0.75rem', // 12px
            },
        },
        customInput: {
            marginTop: 1,
            marginBottom: 1,
            width: '45ch',
            '& > label': {
                top: 23,
                left: 0,
                color: theme.grey500,
                '&[data-shrink="false"]': {
                    top: 5,
                },
            },
            '& > div > input': {
                padding: '0.875rem 0.875rem !important', // 14px
                '@media (max-width: 600px)': {
                    padding: '0.75rem 0.75rem !important', // 12px
                },
            },
            '& legend': {
                display: 'none',
            },
            '& fieldset': {
                top: 0,
            },
        },
        mainContent: {
            backgroundColor: theme.background,
            width: '100%',
            minHeight: 'calc(100vh - 88px)',
            flexGrow: 1,
            padding: '1.25rem', // 20px
            marginTop: '3.75rem', // 60px
            marginRight: '1.25rem', // 20px
            borderRadius: `${theme?.customization?.borderRadius}px`,
            '@media (max-width: 600px)': {
                padding: '1rem', // Adjust padding for smaller screens
                marginTop: '2.5rem', // 40px
                marginRight: '1rem', // 16px
            },
        },
        menuCaption: {
            fontSize: '0.875rem', // 14px
            fontWeight: 500,
            color: theme.heading,
            padding: '6px',
            textTransform: 'capitalize',
            marginTop: '10px',
            '@media (max-width: 600px)': {
                fontSize: '0.75rem', // 12px
            },
        },
        subMenuCaption: {
            fontSize: '0.6875rem', // 11px
            fontWeight: 500,
            color: theme.darkTextSecondary,
            textTransform: 'capitalize',
            '@media (max-width: 600px)': {
                fontSize: '0.625rem', // 10px
            },
        },
        commonAvatar: {
            cursor: 'pointer',
            borderRadius: '8px',
        },
        smallAvatar: {
            width: '1.375rem', // 22px
            height: '1.375rem', // 22px
            fontSize: '1rem',
            '@media (max-width: 600px)': {
                width: '1.25rem', // 20px
                height: '1.25rem', // 20px
                fontSize: '0.875rem', // 14px
            },
        },
        mediumAvatar: {
            width: '2.125rem', // 34px
            height: '2.125rem',
            fontSize: '1.2rem',
            '@media (max-width: 600px)': {
                width: '2rem', // 32px
                height: '2rem', // 32px
                fontSize: '1rem', // 16px
            },
        },
        largeAvatar: {
            width: '2.75rem', // 44px
            height: '2.75rem',
            fontSize: '1.5rem',
            '@media (max-width: 600px)': {
                width: '2.5rem', // 40px
                height: '2.5rem', // 40px
                fontSize: '1.25rem', // 20px
            },
        },
    };
};

export default themeTypography;