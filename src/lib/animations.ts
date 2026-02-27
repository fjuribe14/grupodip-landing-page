import {
  waapi,
  stagger,
  type WAAPIAnimation,
  type DOMTargetsParam,
  type WAAPIAnimationParams,
} from "animejs";

type TCustomAnimationKeys = "initial" | "animate";

type TCustomAnimationParams = {
  target: DOMTargetsParam;
  params?: WAAPIAnimationParams;
};

export const customAnimation = ({
  target,
  params,
}: TCustomAnimationParams): WAAPIAnimation => {
  if (Array.isArray(target)) {
    target.map((target) => {
      return waapi.animate(target, params || {});
    });
  }
  return waapi.animate(target, params || {});
};

export const heroTextAnimation: Record<
  TCustomAnimationKeys,
  WAAPIAnimationParams
> = {
  initial: { opacity: 0, translateY: 100 },
  animate: { opacity: [0, 1], translateY: [100, 0] },
};

export const heroButtonAnimation: Record<
  TCustomAnimationKeys,
  WAAPIAnimationParams
> = {
  initial: { opacity: 0, translateY: 100 },
  animate: { opacity: [0, 1], translateY: [100, 0] },
};

export const heroContainerAnimation: Record<
  TCustomAnimationKeys,
  WAAPIAnimationParams
> = {
  initial: { opacity: 1 },
  animate: { translateX: [-720, 0], delay: stagger(200) },
};
