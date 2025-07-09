// @ts-ignore
export const CV_PATH = import.meta.env.VITE_CV_PATH;
// @ts-ignore
export const GITHUB_LINK = import.meta.env.VITE_GITHUB_LINK;
// @ts-ignore
export const LINKEDIN_LINK = import.meta.env.VITE_LINKEDIN_LINK;
// @ts-ignore
export const SEGMENTATION_PRESENTATION_PATH = import.meta.env.VITE_SEGMENTATION_PRESENTATION_PATH;

if (!(CV_PATH && GITHUB_LINK && LINKEDIN_LINK && SEGMENTATION_PRESENTATION_PATH)) {
  console.error("Missing environment variables");
}