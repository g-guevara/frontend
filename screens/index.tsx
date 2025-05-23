// Explicitly export all screens to fix import issues
import HomeScreen from './HomeScreen';
import TestScreen from './TestScreen';
import ReactionsScreen from './ReactionScreen';
import WishlistScreen from './WishlistScreen';

// Named exports
export { HomeScreen, TestScreen, ReactionsScreen, WishlistScreen };

// Default exports for direct imports
export default {
  HomeScreen,
  TestScreen,
  ReactionsScreen,
  WishlistScreen
};