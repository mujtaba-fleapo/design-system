import Box from '@mui/material/Box';
import { CreatorPost } from './components/post/CreatorPost';
import { CssBaseline } from './lab/CssBaseline';

const props = {
  id: '1',
  avatarImage: 'https://source.unsplash.com/1600x900/?portrait',
  caption: 'This is a caption',
  commentCount: 10,
  likeCount: 10,
  isLiked: true,
  username: 'Aisha Mian',
  isCreator: true,
  subscriberUnlockPrice: 20,
  nonSubscriberUnlockPrice: 20,
  isExclusive: true,
  isSubscribed: true,
  assets: [
    {
      id: '1',
      url: 'https://storage.googleapis.com/fanfix2/PostMedia/S5McichzymWXEK1UZaSxZDX84S92/72d36b7d-d809-4d34-852b-a4bb6b571024_resized.webp',
      isFree: true,
      resizedUrl:
        'https://storage.googleapis.com/fanfix2/PostMedia/S5McichzymWXEK1UZaSxZDX84S92/72d36b7d-d809-4d34-852b-a4bb6b571024_resized.webp',
      type: 'image'
    },
    {
      id: '2',
      url: 'https://storage.googleapis.com/fanfix2/PostMedia/S5McichzymWXEK1UZaSxZDX84S92/72d36b7d-d809-4d34-852b-a4bb6b571024_resized.webp',
      isFree: true,
      resizedUrl:
        'https://storage.googleapis.com/fanfix2/PostMedia/S5McichzymWXEK1UZaSxZDX84S92/72d36b7d-d809-4d34-852b-a4bb6b571024_resized.webp',
      type: 'image'
    }
  ],
  watermark: 'ffwHJFpTZqMkX4OyIJmeq8isRCf1'
};

function App() {
  // const sessionState = useSelector((state: { global: any }) => state.global); //can access redux state
  return (
    <>
      <Box
        margin={'10px awuto'}
        padding={'10px'}
        gap="20px"
        display={'flex'}
        flexDirection={'column'}
        maxWidth={'600px'}
      >
        <CreatorPost {...props} />
      </Box>
      <CssBaseline />
    </>
  );
}

export default App;
