import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Funding',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Collaborate and co-fund Web3 innovations with minimal administrative overhead.
      </>
    ),
  },
  {
    title: 'Accountability',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Track progress on proposals, review milestone based funding and ensure funds are used responsibly.
      </>
    ),
  },
  {
    title: 'Transparency',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        View the details of proposals, milestones, funders and collaborators. Track information and create discussions all in one place.
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
        <h3>{title}</h3>
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
