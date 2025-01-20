# React useEffect Hook with Empty Dependency Array Not Working

This repository demonstrates a common issue with the React `useEffect` hook and provides a solution.

The problem:
The `useEffect` hook, when used with an empty dependency array (`[]`), should only run once after the component mounts. However, in certain situations, it might not behave as expected, leading to unexpected re-renders or side effects.

The solution:
The issue often lies in unintended side effects within the effect function itself.  Ensure that the effect function does not trigger any state updates or other actions that could cause the component to re-render. 