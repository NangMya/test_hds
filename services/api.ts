import "server-only";

const BASE_URL = process.env.BASE_URL
  ? process.env.BASE_URL
  : "http://localhost:3000";


export interface AdminProp{
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
  createdBy?: {
    name: string;
  };
  updatedBy?: {
    name: string;
  };
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
  image: string | null;
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

async function fetcher<T>(url: string, tags: string[] = []): Promise<T> {
  const fullUrl = `${BASE_URL}${url}`;

  const res = await fetch(fullUrl, {
    cache: "no-store", // Example of disabling cache, or use 'force-cache'
    next: { tags },
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': `Bearer ${process.env.API_KEY}`, // Example auth
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return res.json();
}

// --- API Call Functions ---
export const api = {
  // Call to get clients
  getClients: async (): Promise<Client[]> => {
    return fetcher<Client[]>("/api/web/client", ["clients"]);
  },

  // Call to get info
  getHomeInfo: async (): Promise<Info> => {
    return fetcher<Info>("/api/web/home", ["info"]);
  },

  // Call to get members
  //   getMembers: async (): Promise<Member[]> => {
  //     return fetcher<Member[]>('https://api.yourdomain.com/members', ['members']);
  //   },

  //   // Call to get info
  //   getHomeInfo: async (): Promise<Info> => {
  //     return fetcher<Info>('https://api.yourdomain.com/info', ['info']);
  //   },
};
