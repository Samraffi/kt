export interface TimelineBlock {
  weekNumber: string;
  title: string;
  items: TimelineListItem[];
}

export type TimelineListItem = string | SubItem;

export interface SubItem {
  item: string;
  subItems?: TimelineListItem[];
}

export interface ContentProps {
  data: TimelineBlock[];
}

export interface ContentItemProps {
  item: TimelineListItem;
}
