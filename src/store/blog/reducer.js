import {ADD_THEME_REQUEST,  ADD_THEME_SUCCESS,  ADD_THEME_ERROR,
        // ADD_COMMIT_REQUEST,  ADD_COMMIT_SUCCESS,  ADD_COMMIT_ERROR
} from './types';

const initialState = {
  themes: [
    {
      title: 'Favorite hero',
      idTheme: 'theme/1',
      author: 'starUser',
      idAuthor: 'user/1',
      counterComments: 3,
      comments: [
        { author: 'starUser',
          idAuthor: 'user/1',
          text: 'My favorite hero it is Darth Vader.',
          idComment: 'theme/1/comment/1'
        },
        { author: 'starHero',
          idAuthor: 'user/2',
          text: 'My favorite hero it is Luke Skywalker.',
          idComment: 'theme/1/comment/2'
        },
        {author: 'starChild',
          idAuthor: 'user/3',
          text: 'Master Yoda the best!',
          idComment: 'theme/1/comment/3'
        }
      ]
    },
    {
      title: 'Favorite film',
      idTheme: 'theme/2',
      author: 'starHero',
      idAuthor: 'user/2',
      counterComments: 2,
      comments: [
        { author: 'starUser',
          idAuthor: 'user/1',
          text: 'My favorite film 1.',
          idComment: 'theme/2/comment/1'
        },
        { author: 'starHero',
          idAuthor: 'user/2',
          text: 'My favorite film 2.',
          idComment: 'theme/2/comment/2'
        }
      ]
    }
  ],
  counterThemes: 2,
  loading: false,
  error: null
};

export function Blog(state = initialState, action,){
  switch (action.type) {

    case ADD_THEME_REQUEST : {
      const newState = {
        ...state,
        loading: true,
      };
      return newState
    }

    case ADD_THEME_SUCCESS : {

      const newState = {
        ...state,
        themes:[...state.themes, action.payload],
        loading: false,
        error: null,
      };
      return newState
    }

    case ADD_THEME_ERROR : {

      const newState = {
        ...state,
        loading: false,
        error: action.payload
      };
      return newState
    }

    default : {
      return state
    }
  }
}