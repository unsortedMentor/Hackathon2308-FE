import React from 'react';
import { mount, shallow } from 'enzyme';
import IssuesList from '../src/components/IssuesList';

const issues = [
  {
    id: 1,
    name: 'npm-cache-issue-open',
    description: 'The server seems to be having some cache issues',
    url: 'https://api.github.com/repos/test-repo/issues/1',
    number: 1,
    labels: ['issue', 'bug_report'],
    state: 'open',
    locked: 'false',
  },
  {
    id: 2,
    name: 'npm-cache-issues-closed 2',
    description: 'The server seems to be having some cache issues',
    url: 'https://api.github.com/repos/test-repo/issues/1',
    number: 1,
    labels: ['issue4', 'bug_report5'],
    state: 'closed',
    locked: 'false',
  },
];

describe('Issue list tests', () => {
  it('renders issues list', () => {
    const wrapper = shallow(<IssuesList issues={issues} filter="all" />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.list-items')).toBeDefined();
  });

  it('renders correct name in issue', () => {
    const wrapper = shallow(<IssuesList issues={issues} filter="all" />);

    expect(wrapper.text().includes('npm-cache-issue-open')).toBe(true);
    expect(wrapper.text().includes('npm-cache-issues-closed 2')).toBe(true);
  });

  it('renders correct tags in issue', () => {
    const wrapper = shallow(<IssuesList issues={issues} filter="all" />);
    expect(wrapper.text().includes('issue')).toBe(true);
    expect(wrapper.text().includes('bug_report')).toBe(true);
  });
  it('renders opened issue when open filter is selected', () => {
    const wrapper = shallow(<IssuesList issues={issues} filter="open" />);

    expect(wrapper.text().includes('npm-cache-issue-open')).toBe(true);
    expect(wrapper.text().includes('npm-cache-issues-closed 2')).toBe(false);
  });
  it('renders closed issue when close filter is selected', () => {
    const wrapper = shallow(<IssuesList issues={issues} filter="closed" />);
    expect(wrapper.text().includes('npm-cache-issue-open')).toBe(false);
    expect(wrapper.text().includes('npm-cache-issues-closed 2')).toBe(true);
  });
});
