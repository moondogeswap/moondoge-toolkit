export interface TabMenuProps {
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  children: React.ReactElement[];
  scale?:string
}
export interface TabProps {
  isActive?: boolean;
  onClick?: () => void;
  scale?:string
}
