import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import MuiCheckbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import {
  defaultSingleCommentText,
  defaultSingleCommentTextProps
} from '../../default-text';
import { Avatar } from '../../elements/Avatar';
import { CreatorBadge } from '../../elements/CreatorBadge';
import { Typography } from '../../elements/Typography';
import { Heart, Heartfilled, Horizontaldots } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { theme } from '../../theme';
import { ContextMenu } from '../navigation/ContextMenu';
import { IComment } from './CommentStack';

interface Props {
  commentId: string;
  parentId?: string;
  username: string;
  isCreator: boolean;
  date: string;
  numLikes: number;
  comment: string;
  profilePic: string;
  userProfilePic?: string;
  allowReply: boolean;
  onReplyClick?: () => void;
  onLike?: (commentId: string) => void;
  onMenuClick?: (e: any) => void;
  onMenuItemClick?: (key: string) => void;
  onAvatarClick?: () => void;
  isLiked?: boolean;
  onLikeClick?: (
    id?: string,
    changeIsLiked?: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    changeCommentLikeCount?: React.Dispatch<React.SetStateAction<number>>
  ) => void;
  options?: { label: string; key: string }[];
  setAuthor?: () => void;
  replies?: IComment[] | null;
  authUserId?: string;
  postAuthorId?: string;
  defaultOptions?: { label: string; key: string }[];
  setCommentToDelete: React.Dispatch<React.SetStateAction<string>>;
  setParentComment: React.Dispatch<React.SetStateAction<string>>;
  authorCommentOptions?: { label: string; key: string }[];
  setShowReplyData?: React.Dispatch<
    React.SetStateAction<{
      username: string;
      commentId: string;
    }>
  >;
  isOnline?: boolean;
  locale?: string;
  text?: defaultSingleCommentTextProps;
}

export const SingleComment = ({
  text = defaultSingleCommentText,
  locale = defaultLocaleValue,
  ...props
}: Props) => {
  const [isCommentLiked, setIsCommentLiked] = useState(props.isLiked);
  const [likeCount, setLikeCount] = useState(props.numLikes ?? 0);
  const [currentReplyAuthorId, setCurrentReplyAuthorId] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLikeButtonClicked, setIsLikeButtonClicked] = useState(false);

  const open = Boolean(anchorEl);

  const onSetAuthor = (authorId: string) => {
    setCurrentReplyAuthorId(authorId);
  };

  const handleClick = (event: any, id: string) => {
    props.setCommentToDelete(id);
    props.setParentComment(props.commentId);
    setAnchorEl(event.currentTarget);
  };

  const handleReplyClick = () => {
    props.onReplyClick?.();
    props.setShowReplyData &&
      props.setShowReplyData({
        username: props.username,
        commentId: props.commentId
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Card
        data-testid={`single-comment-container-${props.commentId}-f`}
        dir={getLocaleDirection(locale)}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          height: 'auto',
          overflow: 'visible',
          padding: 0,
          bgcolor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          '&:not(:first-of-type)': {
            marginTop: { xs: 2, sd: '20px' }
          }
        }}
      >
        <Stack
          data-testid={`single-comment-stack-ds`}
          direction={'row'}
          alignItems={'start'}
          spacing={1}
          width={'100%'}
        >
          <Avatar
            data-testid={`single-comment-avatar-ds`}
            src={props.profilePic}
            size={{ xs: 28, md: 38 }}
            alt="Profile Pic"
            onClick={() => props.onAvatarClick?.()}
            isOnline={props.isOnline}
          />
          <Box width={'100%'}>
            <Typography className="interSemibold13">
              <Box
                sx={{
                  display: 'inline-flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'start',
                  gap: '5px',
                  width: 'fit-content'
                }}
              >
                {props.username}
                {props.isCreator && <CreatorBadge height={15} width={15} />}
              </Box>
              {'  '}
              <Typography
                className="interRegular13"
                sx={{
                  display: 'inline',
                  wordBreak: 'break-word',
                  whiteSpace: 'break-spaces'
                }}
              >
                {props.comment}
              </Typography>
            </Typography>

            <Stack
              direction={'row'}
              alignItems={'center'}
              spacing={1}
              mt={'5px'}
            >
              <Typography className="interMedium12">
                {new Date(props.date).toLocaleDateString()}
              </Typography>
              <Typography className="interMedium12">
                {likeCount ?? 0}{' '}
                {likeCount === 1 ? text.likeText : text.likesText}{' '}
              </Typography>
              {!props.parentId && props.allowReply && (
                <Box
                  onClick={handleReplyClick}
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  <Typography className="interMedium12">
                    {''} {text.replyText}{' '}
                  </Typography>
                </Box>
              )}
              {props.options?.length! > 0 && (
                <Box
                  onClick={(e) => {
                    props.setAuthor?.();
                    props.onMenuClick?.(e);
                  }}
                  sx={{ display: 'flex', cursor: 'pointer' }}
                >
                  <Horizontaldots />
                </Box>
              )}
            </Stack>
          </Box>
        </Stack>
        <Box data-testid={`single-comment-box-ds`}>
          <MuiCheckbox
            data-testid={`single-comment-multi-check-box-ds`}
            checked={isCommentLiked}
            onChange={(e) => {
              setIsLikeButtonClicked(true);
              props.onLikeClick?.(
                props.commentId,
                setIsCommentLiked,
                setLikeCount
              );
            }}
            icon={<Heart />}
            checkedIcon={<Heartfilled />}
            sx={{
              padding: '0',
              '& .MuiSvgIcon-root': {
                color: 'black',
                width: '1.25rem',
                height: '1.25rem'
              },
              color: 'black',
              '&:hover': {
                background: 'transparent',
                '& .MuiSvgIcon-root': {
                  color: 'black'
                }
              },
              '&.Mui-checked': {
                '& .MuiSvgIcon-root': {
                  animation: isLikeButtonClicked ? 'pulse 0.2s linear' : 'none'
                }
              }
            }}
          />
        </Box>
      </Card>
      {props.replies?.length! > 0 && (
        <Stack
          data-testid={`reply-stack-user-comment-ds`}
          flexDirection={'column'}
          spacing={'20px'}
          mt={'20px'}
          width={'95%'}
          alignSelf={'end'}
        >
          {props.replies?.map((reply, index) => {
            return (
              <SingleComment
                allowReply={false}
                data-testid={`reply-stack-single-data-reply-${reply.id}-ds`}
                key={reply.id}
                commentId={reply.id}
                parentId={props.commentId}
                username={reply.author.username}
                isCreator={reply.author.userId === props.postAuthorId}
                date={reply.createdAt}
                numLikes={reply.likeCount}
                comment={reply.comment}
                profilePic={reply.author?.avatarUrl || ''}
                onMenuClick={(e) => handleClick(e, reply.id)}
                onMenuItemClick={props.onMenuItemClick}
                isOnline={props.isOnline}
                isLiked={reply?.likes?.length ? true : false}
                onLikeClick={props.onLikeClick}
                options={
                  (reply.author?.userId === props.authUserId
                    ? props.authorCommentOptions
                    : props.defaultOptions) ?? []
                }
                setAuthor={() => onSetAuthor(reply.author.userId)}
                postAuthorId={props.postAuthorId}
                setCommentToDelete={props.setCommentToDelete}
                setParentComment={props.setParentComment}
              />
            );
          })}
        </Stack>
      )}
      <ContextMenu
        data-testid={`comment-stack-context-menu-ds`}
        options={
          (currentReplyAuthorId === props.authUserId
            ? props.authorCommentOptions
            : props.defaultOptions) ?? []
        }
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onClick={(e: string) => {
          props.onMenuItemClick?.(e);
        }}
        lastItemIsAlert={true}
        disableMobilePanel={true}
        locale={locale}
      />
    </ThemeProvider>
  );
};
