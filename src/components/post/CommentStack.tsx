import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import {
  defaultCommentStackText,
  defaultCommentStackTextProps
} from '../../default-text';
import { Chip } from '../../elements/Chip';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { theme } from '../../theme';
import { ContextMenu } from '../navigation/ContextMenu';
import { AddComment } from './AddComment';
import { SingleComment } from './SingleComment';

export interface IComment {
  author: {
    userId: string;
    username: string;
    avatarUrl?: string | null;
  };
  createdAt: string;
  comment: string;
  likeCount: number;
  id: string;
  replies?: IComment[] | null;
  likes?: LikeProps[] | null;
}
interface LikeProps {
  id: string;
}

interface UserProps {
  key: string;
  label: string;
}

interface Props {
  postId: string;
  comments: IComment[];
  loading: boolean;
  options?: { label: string; key: string }[];
  authorCommentOptions?: { label: string; key: string }[];
  showMoreComments?: boolean;
  onComment: (comment: string, replyTo?: string) => void;
  onReply?: (comment: string, replyTo?: string) => void;
  onLike?: (commentId: string) => void;
  onShowMoreClick?: () => void;
  onAvatarClick?: (comment: IComment) => void;
  onMenuItemClick?: (key: string) => void;
  onLikeClick?: (id?: string) => void;
  onCommentLike?: (
    id?: string,
    changeIsLiked?: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    changeCommentLikeCount?: React.Dispatch<React.SetStateAction<number>>
  ) => void;
  profilePic?: string;
  showMore?: boolean;
  lastItemIsAlert?: boolean;
  authUserId?: string;
  postAuthorId?: string;
  setCommentToDelete: React.Dispatch<React.SetStateAction<string>>;
  setParentComment: React.Dispatch<React.SetStateAction<string>>;
  fans?: UserProps[];
  isOnline?: boolean;
  text?: defaultCommentStackTextProps;
  locale?: string;
}

export const CommentStack = ({
  postId,
  comments,
  loading = false,
  onReply,
  options,
  onComment,
  onShowMoreClick,
  showMoreComments = false,
  onAvatarClick,
  onMenuItemClick,
  onCommentLike,
  profilePic,
  showMore,
  lastItemIsAlert,
  authUserId,
  authorCommentOptions,
  fans,
  postAuthorId,
  setCommentToDelete,
  setParentComment,
  isOnline,
  locale = defaultLocaleValue,
  text = defaultCommentStackText
}: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [currentCommentAuthorId, setCurrentCommentAuthorId] = useState('');
  const [showReplyData, setShowReplyData] = useState<{
    username: string;
    commentId: string;
  }>({
    username: '',
    commentId: ''
  });

  const handleClick = (event: any, id: string) => {
    setParentComment('');
    setCommentToDelete(id);
    setAnchorEl(event.currentTarget);
  };

  const onSetAuthor = (authorId: string) => {
    setCurrentCommentAuthorId(authorId);
  };

  const scrollToElement = () => {
    const addCommentId = `add-comment-container-ds-${postId}`;
    const element = document.getElementById(addCommentId);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          dir={getLocaleDirection(locale)}
          data-testid={`comment-stack-box-1-ds`}
          sx={{ bgcolor: 'common.white', width: '100%' }}
        >
          <Stack
            data-testid={`comment-stack-user-comment-ds`}
            flexDirection={'column'}
            spacing={'20px'}
            mt={'20px'}
          >
            {comments?.length > 0 &&
              comments?.map((comment, index) => {
                return (
                  <SingleComment
                    data-testid={`comment-stack-single-data-comment-${index}-ds`}
                    key={comment.id}
                    commentId={comment.id}
                    username={comment.author.username}
                    isCreator={comment.author.userId === postAuthorId}
                    date={comment.createdAt}
                    numLikes={comment.likeCount}
                    comment={comment.comment}
                    replies={comment.replies}
                    profilePic={comment.author?.avatarUrl || ''}
                    userProfilePic={profilePic}
                    allowReply={true}
                    onMenuClick={(e) => handleClick(e, comment.id)}
                    onMenuItemClick={onMenuItemClick}
                    isLiked={comment?.likes?.length ? true : false}
                    onLikeClick={onCommentLike}
                    options={
                      (comment.author?.userId === authUserId
                        ? authorCommentOptions
                        : options) ?? []
                    }
                    setAuthor={() => onSetAuthor(comment.author.userId)}
                    authUserId={authUserId}
                    postAuthorId={postAuthorId}
                    authorCommentOptions={authorCommentOptions}
                    defaultOptions={options}
                    setShowReplyData={setShowReplyData}
                    onReplyClick={scrollToElement}
                    setCommentToDelete={setCommentToDelete}
                    setParentComment={setParentComment}
                    isOnline={isOnline}
                    locale={locale}
                  />
                );
              })}
          </Stack>
          {showMoreComments && (
            <Box
              data-testid={`show-${showMore ? 'more' : 'less'}-comments-ds`}
              width={'100%'}
              textAlign={'center'}
              mt={1}
            >
              <Chip
                data-testid={`comment-stack-chip-ds`}
                label={text.showMoreText as string}
                variant={'light'}
                onClick={() => onShowMoreClick?.()}
              />
            </Box>
          )}
          <Box mt={'20px'}>
            <AddComment
              data-testid={`comment-stack-add-comment-ds`}
              loading={loading}
              onSubmit={(com: string, repTo?: string) => {
                onComment(com, repTo);
                setShowReplyData({
                  username: '',
                  commentId: ''
                });
              }}
              profilePic={profilePic}
              isOnline={isOnline}
              fans={fans}
              showReplyData={showReplyData}
              setShowReplyData={setShowReplyData}
              postId={postId}
              locale={locale}
            />
          </Box>
        </Box>
        <ContextMenu
          data-testid={`comment-stack-context-menu-ds`}
          options={
            (currentCommentAuthorId === authUserId
              ? authorCommentOptions
              : options) ?? []
          }
          open={open}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          onClick={(e: string) => {
            onMenuItemClick?.(e);
          }}
          lastItemIsAlert={lastItemIsAlert}
          disableMobilePanel={true}
          locale={locale}
        />
      </ThemeProvider>
    </>
  );
};
