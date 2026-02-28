interface LocationProps {
  message?: string;
  ip: string;
  city: {
    name: string;
    postalCode: string;
  };
  country: {
    name: string;
    emojiFlag: string;
    timezone: string;
  };
  sysInfo: {
    system: string;
    webBrowser: {
      browser: string;
      version: string;
    };
  };
}

interface SnVisitorsProps {
  id: string;
  count: number;
  city: string;
  country: string;
  timezone: string;
  system: string;
  browser: string;
  emoji_flag: string;
  ip: string;
  created_at: Date | string;
}

type Project = {
  id: string;
  title: string;
  description: string;
  long_description: string;
  image_url: string;
  tags: string;
  link: string | null;
  featured: boolean;
  created_at: string;
  project_url: string;
};

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  status: boolean;
  ip: string;
  city: string;
  country: string;
  timezone: string;
  system: string;
};


export { SnVisitorsProps, LocationProps, Project, ContactMessage };
