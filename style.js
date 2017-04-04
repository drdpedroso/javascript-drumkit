import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': '#000000'
  },
  'key': {
    'background': 'red',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 70 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'transition': 'all 0.07s',
    'borderWidth': '1px',
    'borderColor': 'darkgrey'
  },
  'playing': {
    'transform': 'scale(1.1)',
    'borderColor': 'yellow',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'yellow' }]
  }
});
