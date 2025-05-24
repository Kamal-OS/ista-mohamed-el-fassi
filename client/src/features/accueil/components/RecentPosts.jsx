import PostCards from "@/features/accueil/components/PostCards";
import SectionHeading from "@/features/accueil/components/SectionHeading";
import Container from "@/layouts/Container";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const posts = [
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA 1",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations 2",
    school: "ISTA 2",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA 3",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA 4",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Les calendriers des fins de formations",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
  {
    category: "vie stagiaires",
    title: "Finale",
    school: "ISTA MOHAMED EL FASSI ERRACHIDIA",
    date: "11/10/2025",
    image:
      "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  },
];

function RecentPosts() {
  return (
    <section>
      <Container>
        <SectionHeading
          icon={<FontAwesomeIcon icon={faClock} />}
          heading="Actualitéss"
        />

        <PostCards posts={posts} />
      </Container>
    </section>
  );
}

export default RecentPosts;
