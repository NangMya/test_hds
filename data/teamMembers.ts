// data/teamMembers.ts (or just define it in your component file)

export type TeamMember = {
  id: number;
  name: string;
  title: string;
  image: string; // Path to image in public folder
};

const allTeamMembers: TeamMember[] = [
  { id: 1, name: 'Annette Black 1', title: 'Founder', image: '/images/common/member3.webp' },
  { id: 2, name: 'Robert Fox 2', title: 'Chief Executive Officer', image: '/images/common/member1.webp' },
  { id: 3, name: 'Kathryn Murphy 3', title: 'Chief Technology Officer', image: '/images/common/member2.webp' },
  { id: 4, name: 'Savannah Nguyen 4', title: 'Creative Director', image: '/images/common/member4.webp' },
  { id: 5, name: 'Esther Howard 5', title: 'Lead Designer', image: '/images/common/member1.webp' },
  { id: 6, name: 'Cameron Williamson 6', title: 'Marketing Manager', image: '/images/common/member2.webp' },
  { id: 7, name: 'Eleanor Pena 7', title: 'Sales Executive', image: '/images/common/member3.webp' },
  { id: 8, name: 'Brooklyn Simmons 8', title: 'Product Manager', image: '/images/common/member4.webp' },
  { id: 9, name: 'Jerome Bell 9', title: 'DevOps Engineer', image: '/images/common/member3.webp' },
  { id: 10, name: 'Jane Cooper 10', title: 'Customer Support Lead', image: '/images/common/member1.webp' },
  { id: 11, name: 'Wade Warren 11', title: 'QA Specialist', image: '/images/common/member2.webp' },
  { id: 12, name: 'Floyd Miles 12', title: 'Frontend Developer', image: '/images/common/member2.webp' },
  { id: 13, name: 'Dianne Russell 13', title: 'Backend Developer', image: '/images/common/member4.webp' },
  { id: 14, name: 'Arlene McCoy 14', title: 'HR Manager', image: '/images/common/member3.webp' },
  { id: 15, name: 'Guy Hawkins 15', title: 'Financial Analyst', image: '/images/common/member3.webp' },
];

export default allTeamMembers;