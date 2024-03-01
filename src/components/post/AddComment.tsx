import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import {
  defaultAddCommentText,
  defaultAddCommentTextProps
} from '../../default-text';
import { Avatar } from '../../elements/Avatar';
import { PillButton } from '../../elements/PillButton';
import { Close } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
import { CustomPopover } from '../navigation/CustomPopover';
interface UserProps {
  key: string;
  label: string;
}

interface Props {
  onSubmit: (comment: string, commentId?: string) => void;
  loading?: boolean;
  profilePic?: string;
  fans?: UserProps[];
  showReplyData?: {
    username: string;
    commentId: string;
  };
  setShowReplyData?: React.Dispatch<
    React.SetStateAction<{
      username: string;
      commentId: string;
    }>
  >;
  postId: string;
  isOnline?: boolean;
  locale?: string;
  text?: defaultAddCommentTextProps;
}

export const AddComment = ({
  onSubmit,
  loading,
  profilePic,
  fans,
  showReplyData,
  setShowReplyData,
  postId,
  isOnline,
  text = defaultAddCommentText,
  locale = defaultLocaleValue
}: Props) => {
  const [commentText, setCommentText] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [options, setOptions] = useState<UserProps[]>(fans || []);

  const open = Boolean(anchorEl);

  const checkTagUser = (event: any) => {
    const sentence = commentText.split(' ');
    const lastWord = sentence[sentence.length - 1];
    if (lastWord[0] === '@') {
      setAnchorEl(event.currentTarget);
      const name = lastWord.substring(1);
      const newOptions = fans?.filter((fan) =>
        fan.label.toLowerCase().includes(name.toLowerCase())
      );
      setOptions(newOptions || []);
    }
  };

  const onPopOverClick = (key: string) => {
    const fan = fans?.filter((fan) => fan.key === key)[0];
    const newText = commentText.replace(/@\w+/g, `@${fan?.label} `);
    setCommentText(newText);
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        id={`add-comment-container-ds-${postId}`}
        data-testid={`add-comment-container-ds-${postId}`}
        dir={getLocaleDirection(locale)}
        direction="row"
        width={'100%'}
        alignItems={'center'}
        spacing="12px"
      >
        <Box sx={{ alignSelf: 'end' }}>
          <Avatar
            src={profilePic}
            isOnline={isOnline}
            size="40px"
            alt="Profile Pic"
          />
        </Box>

        <FormControl
          data-testid={`add-comment-form-control-ds`}
          fullWidth
          sx={{
            m: 1,
            borderRadius: '4px',
            minHeight: '40px',
            overflow: 'hidden'
          }}
          variant="filled"
        >
          {showReplyData && showReplyData.username && (
            <Box
              sx={{
                width: '100%',
                minHeight: '20px',
                border: 0,
                background: colors.lightgray[100],
                fontSize: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <p style={{ marginLeft: '12px' }}>
                {text.replyingText} @{showReplyData.username}
              </p>

              <Box
                sx={{
                  marginRight: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onClick={() =>
                  setShowReplyData &&
                  setShowReplyData({ username: '', commentId: '' })
                }
              >
                <Close size="10px" />
              </Box>
            </Box>
          )}
          <Box display="flex">
            <Input
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  commentText.trim().length > 0 &&
                    onSubmit?.(commentText.trim(), showReplyData?.commentId);
                  setCommentText('');
                }
              }}
              data-testid={`add-comment-input-ds`}
              disableUnderline={true}
              disabled={loading}
              value={commentText}
              onChange={(e: any) => {
                if (e.target.value.length > 250)
                  return setCommentText(e.target.value.slice(0, 250));
                checkTagUser(e);
                setCommentText(e.target.value);
              }}
              placeholder={`${text.writeCommentText}...`}
              inputProps={{
                underline: {
                  '&::before': {
                    borderBottom: 0,
                    background: 'red'
                  }
                },
                sx: {
                  '&::placeholder': {
                    color: colors.black,
                    fontSize: '14px',
                    fontWeight: 400
                  }
                }
              }}
              sx={{
                width: '100%',
                minHeight: '40px',
                border: 0,
                background: colors.lightgray[200],
                px: '12px',
                fontSize: '14px'
              }}
              multiline
            />
            <Box
              sx={{
                // position: 'absolute',
                // bottom: '-50%',
                // transform: 'translateY(-50%)',
                zIndex: 10,
                background: colors.lightgray[200],
                // right: '0'
                // height: '100%'
                width: 'fit-content'
              }}
              className="add-comment-btn"
            >
              <PillButton
                data-testid={`add-comment-pill-button-ds`}
                text={loading ? `${text.postingText}...` : text.postText}
                variant="text"
                loading={loading}
                sx={{
                  color: colors.black,
                  opacity: commentText.trim().length > 0 ? 0.8 : 0.3,
                  borderRadius: 0,
                  p: '0 12px',
                  minWidth: 0
                }}
                onClick={() => {
                  if (commentText.trim().length > 0)
                    onSubmit?.(commentText.trim(), showReplyData?.commentId);
                  setCommentText('');
                }}
              />
            </Box>
          </Box>
        </FormControl>
        {fans && fans.length > 0 && (
          <CustomPopover
            data-testid={`comment-stack-context-menu-ds`}
            options={options || []}
            open={open}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            onClick={onPopOverClick}
            lastItemIsAlert={false}
            disableMobilePanel={true}
          />
        )}
      </Stack>
    </ThemeProvider>
  );
};
