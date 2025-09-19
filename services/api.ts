import "server-only";

const BASE_URL = process.env.BASE_URL
  ? process.env.BASE_URL
  : "http://localhost:3000";


export interface AdminProp {
  id?: number;
  name: string;
  email: string;
  created_at?: any;
}
export interface Client {
  id: string;
  name: string;
  logo: string;
}



export interface Info {
  id: number;
  name: string;
  email: string;
  phone1: string;
  phone2: string;
  address: string;
  map: string;
  facebook_url: string;
  linkedin_url: string;
  instagram_url: string;
  youtube_url: string;
  telegram_url: string;
  tiktok_url: string;
  showreel_pc: string | null;
  showreel_mb: string | null;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
}

export type DepartmentProp = {
  id?: number;
  name: string;
  status: number;
  created_by?: number;
  updated_by?: number;
  created_at?: string;
  updated_at?: string;
  jobs?: JobProp[];
  createdBy?: {
    name: string;
  };
  updatedBy?: {
    name: string;
  };
};
export type TeamMember = {
  id: number;
  name: string;
  title: string;
  image: string;
};
export type MemberProp = {
  id?: number;
  name: string;
  profile: string | null,
  department_id?: string | null,
  position: string,
  department?: {
    name: string,
  };
  created_by?: number;
  updated_by?: number;
  created_at?: string;
  updated_at?: string;
  createdBy?: {
    name: string;
  };
  updatedBy?: {
    name: string;
  };
};

export type WorkProp = {
  id?: number;
  date: string;
  title: string;
  description: string;
  challenges: string;
  strategy: string;
  takeaway: string;
  image?: string | null;
  created_by?: number;
  updated_by?: number;
  created_at?: string;
  updated_at?: string;
  createdBy?: {
    name: string;
  };
  updatedBy?: {
    name: string;
  };
}


export type ActivityProp = {
  id?: number;
  title: string;
  description: string,
  galleries?: GalleryProp[],
  created_by?: number;
  updated_by?: number;
  created_at?: string;
  updated_at?: string;
  createdBy?: {
    name: string;
  };
  updatedBy?: {
    name: string;
  };
};
export type GalleryProp = {
  id?: number,
  type: string,
  image: string,
}
export type JobProp = {
  id?: number;
  open_date: string;
  close_date: string;
  position: string;
  description: string;
  department_id?: string | null,
  experiences: string;
  level: string;
  overview: string;
  job_type: string;
  salary: string;
  duties: string;
  requirements: string;
  gender: string;
  status: string;
  created_by?: number;
  updated_by?: number;
  created_at?: string;
  updated_at?: string;
  department?: {
    name: string
  }
  applicant?:{
    id?:string,
  }[]
  createdBy?: {
    name: string;
  };
  updatedBy?: {
    name: string;
  };
};

export type ApplicantProp = {
  id?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  job_id: string | null;
  job?: {
    position: string
  }
  file: string;
  expected_salary: string;
  created_at: string;
  updated_at: string;
};

export type AwardProp = {
  id?: number;
  date: string;
  title: string,
  department_id?: string | null;
  member_id?: string | null;
  department?: {
    name: string,
  };
  member?: {
    name: string;
    profile?: string | null;
  }
  created_by?: number;
  updated_by?: number;
  created_at?: string;
  updated_at?: string;
  createdBy?: {
    name: string;
  };
  updatedBy?: {
    name: string;
  };
};

export type ContactProp = {
  id?: number,
  name: string,
  email: string,
  phone: string,
  message:string,
}

type FetchOptions = {
  tags?: string[];
  revalidate?: number;
  cache?: 'force-cache' | 'no-store';
};

async function fetcher<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const { tags = [], revalidate, cache } = options;
  const fullUrl = `${process.env.BASE_URL}${url}`;

  const cacheOption = cache || 'force-cache';
  const fetchOptions: RequestInit = {
    cache: cacheOption,
    next: { tags, revalidate },
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(fullUrl, fetchOptions);

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return res.json();
}

// --- API Call Functions ---
export const api = {
  getMembers: async (): Promise<MemberProp[]> => {
    return fetcher('/api/web/member', { revalidate: 600, tags: ["members"] });
  },
  getInfo: async (): Promise<Info> => {
    return fetcher('/api/web/home', { revalidate: 30, tags: ["info"] });
  },
  getClients: async (): Promise<Client[]> => {
    return fetcher("/api/web/client", { revalidate: 600, tags: ['clients'] });
  },
  getOurWorks: async (): Promise<WorkProp[]> => {
    return fetcher("/api/web/work", { revalidate: 30, tags: ['works'] });
  },
  getWorkById: async (id: string): Promise<WorkProp | null> => {
    return fetcher(`/api/web/work/${id}`, { revalidate: 30, tags: ["work"] });
  },
  getDepartmentWithJobs: async (): Promise<DepartmentProp[]> =>{
    return fetcher('/api/web/department',{revalidate: 3, tags: ['departments']});
  },
   getJobs: async(): Promise<JobProp[]> =>{
    return fetcher(`/api/web/job`,{revalidate: 30, tags: ["job"]});
  },
  getJobById: async(id:string): Promise<JobProp | null> =>{
    return fetcher(`/api/web/job/${id}`,{revalidate: 30, tags: ["job"]});
  }


};
