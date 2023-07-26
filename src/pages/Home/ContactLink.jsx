import PropTypes from 'prop-types';

const ContactLink = ({ icon, title, content, href, blank = false }) => {
  const target = blank ? '_blank' : undefined;
  const rel = blank ? 'noreferrer' : undefined;

  return (
    <li className="flex items-center gap-4">
      <div className="rounded-md bg-red-600 p-2">
        <img src={icon} alt="" height={32} width={32} aria-hidden="true" />
      </div>
      <div>
        <span className="block text-sm text-zinc-400">{title}</span>
        <a className="hover:text-red-600" href={href} target={target} rel={rel}>
          {content}
        </a>
      </div>
    </li>
  );
};

ContactLink.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  blank: PropTypes.bool,
};

ContactLink.defaultProps = {
  blank: false,
};

export default ContactLink;
