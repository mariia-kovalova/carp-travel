export interface ContactListProps {
  data: { title: string; items: { text: string; href: string }[] };
  isInversed?: boolean;
}
