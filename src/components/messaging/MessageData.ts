function oneMonthFromNow() {
  const currentDate = new Date();
  currentDate.setUTCMonth(currentDate.getUTCMonth() + 1);
  return currentDate.toISOString();
}

export const spanishDummyMessages = [
  {
    timestamp: 'Yesterday',
    messages: [
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: `publicación`
      }
    ]
  }
];
export const arabicDummyMessages = [
  {
    timestamp: 'Yesterday',
    messages: [
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: `ارسل`
      }
    ]
  }
];

export const dummyMessages = [
  {
    timestamp: 'Yesterday',
    messages: [
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: `Let's explore the world together we will demonstrate this component. Watch the timestamp`
      },
      {
        id: '2',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: 'Are you ready. This is a free message by the way.'
      },
      {
        id: '3',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Here is a media message, the media is already paid for. The price was 10? expired but that does not matter',
        media: {
          paidMedia: true,
          price: 10,
          expiringDate: '2021-10-07T12:00:00.000Z',
          purchased: true,
          assets: [
            {
              id: '1',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/300/400'
            },
            {
              id: '2',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/400/500'
            }
          ]
        }
      },
      {
        id: '4',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Locked and expired! not purchased before 📆',
        media: {
          paidMedia: true,
          price: 10,
          expiringDate: '2021-10-07T12:00:00.000Z',
          purchased: false,
          assets: [
            {
              id: '1',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/300/400'
            },
            {
              id: '2',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/400/500'
            }
          ]
        }
      },
      {
        id: '5',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: "I hope you noticed the expired messages are locked. You can't click on them, unless paid for already"
      },
      {
        id: '6',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'This is just a regular message that costs 4'
      },
      {
        id: '7',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: 'This is just a regular message from the other end'
      }
    ]
  },
  {
    timestamp: 'Today',
    messages: [
      {
        id: '10',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: `Let's explore more about this component. Watch the timestamp. It now says today`
      },
      {
        id: '1',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: 'Are you ready. This is a free message by the way.'
      },
      {
        id: '11',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Let me send you a media message, Locked and not expired!  📆'
      },
      {
        id: '12',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Here is a media message, Not expired!  📆',
        media: {
          paidMedia: true,
          price: 125,
          expiringDate: oneMonthFromNow(),
          purchased: false,
          assets: [
            {
              id: '1',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/300/400'
            },
            {
              id: '2',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/400/500'
            }
          ]
        }
      },
      {
        id: '13',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: "Again, let's see locked and expired!  📆"
      },
      {
        id: '14',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Here is a media message locked and expired! ❌',
        media: {
          paidMedia: true,
          price: 125,
          expiringDate: '2021-10-07T12:00:00.000Z',
          purchased: false,
          assets: [
            {
              id: '1',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/300/400'
            },
            {
              id: '2',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/400/500'
            }
          ]
        }
      },
      {
        id: '15',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Now, lets see a media message that is not locked and not expired!  📆'
      },
      {
        id: '16',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Free message. it is also not expired.  📆',
        media: {
          paidMedia: false,
          price: 0,
          expiringDate: oneMonthFromNow(),
          purchased: false,
          assets: [
            {
              id: '1',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/300/400'
            },
            {
              id: '2',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/400/500'
            }
          ]
        }
      },
      {
        id: '17',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: "Now, let's see a free message that expired.  📆"
      },
      {
        id: '18',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Free, Expired. As long as it was free originally expire flag is ignored',
        media: {
          paidMedia: false,
          price: 0,
          expiringDate: '2021-10-07T12:00:00.000Z',
          purchased: false,
          assets: [
            {
              id: '1',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/300/400'
            },
            {
              id: '2',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/400/500'
            }
          ]
        }
      }
    ]
  },
  {
    timestamp: '2021-10-03',
    messages: [
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: `Let's see a teaser`
      },
      {
        id: '2',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: 'This coming message is locked and not expired and has a teaser'
      },
      {
        id: '3',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Here is a teaser',
        media: {
          paidMedia: true,
          hasPreview: true,
          price: 10,
          expiringDate: '2900-10-07T12:00:00.000Z',
          purchased: false,
          assets: [
            {
              id: '1',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/300/400'
            },
            {
              id: '2',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/400/500'
            }
          ]
        }
      },
      {
        id: '1',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: "I'm good, how are you?"
      },
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Where are you currently?'
      },
      {
        id: '1',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: "I'm in the US"
      }
    ]
  },
  {
    timestamp: '2021-10-04',
    messages: [
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Hello'
      },
      { id: '1', senderId: '2', receiverId: '1', messageCost: 4, text: 'Hi!!' },
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'How are you?'
      },
      {
        id: '1',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: "I'm good, how are you?"
      },
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Where are you currently?'
      },
      {
        id: '1',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: "I'm in the US"
      }
    ]
  },
  {
    timestamp: '2021-10-05',
    messages: [
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Hello'
      },
      { id: '1', senderId: '2', receiverId: '1', messageCost: 4, text: 'Hi!!' },
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'How are you?'
      },
      {
        id: '1',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: "I'm good, how are you?"
      },
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Where are you currently?'
      },
      {
        id: '1',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: "I'm in the US"
      }
    ]
  },
  {
    timestamp: '2021-10-06',
    messages: [
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Hello'
      },
      { id: '1', senderId: '2', receiverId: '1', messageCost: 4, text: 'Hi!!' },
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'How are you?'
      },
      {
        id: '1',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: "I'm good, how are you?"
      },
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Where are you currently?'
      },
      {
        id: '1',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: "I'm in the US"
      }
    ]
  },
  {
    timestamp: '2021-10-07',
    messages: [
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Hello',
        media: {
          paidMedia: true,
          price: 10,
          expiringDate: '2021-10-07T12:00:00.000Z',
          purchased: false,
          assets: [
            {
              id: '1',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/300/400'
            }
          ]
        }
      },
      { id: '1', senderId: '2', receiverId: '1', messageCost: 4, text: 'Hi!!' },
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'How are you?'
      },
      {
        id: '1',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: "I'm good, how are you?"
      },
      {
        id: '1',
        senderId: '1',
        receiverId: '2',
        messageCost: 4,
        text: 'Where are you currently? zzzz',
        media: {
          paidMedia: true,
          price: 10,
          expiringDate: '2021-10-07T12:00:00.000Z',
          purchased: false,
          assets: [
            {
              id: '1',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/300/400'
            },
            {
              id: '2',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/400/500'
            },
            {
              id: '1',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/200/300'
            },
            {
              id: '2',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/500/600'
            },
            {
              id: '1',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/600/700'
            },
            {
              id: '2',
              assetType: 'image',
              assetUrl: 'https://picsum.photos/800/900'
            }
          ]
        }
      },
      {
        id: '1',
        senderId: '2',
        receiverId: '1',
        messageCost: 4,
        text: "I'm in the US"
      }
    ]
  }
];
