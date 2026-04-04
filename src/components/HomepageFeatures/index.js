import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Temiz & Okunabilir Kod',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Yazılım geliştirme sürecinde temiz kod yazmayı ve sürdürülebilir
        mimari tasarlamayı ön planda tutuyorum.
      </>
    ),
  },
  {
    title: 'Deneyimlerimi Paylaşıyorum',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Projelerimde karşılaştığım sorunları, çözüm yollarını ve
        öğrendiklerimi bu blogda detaylıca anlatıyorum.
      </>
    ),
  },
  {
    title: 'Açık Kaynak Tutkunu',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Açık kaynak projelere katkıda bulunmayı ve toplulukla birlikte
        geliştirmeyi seviyorum. Kodlarıma GitHub üzerinden ulaşabilirsiniz.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
