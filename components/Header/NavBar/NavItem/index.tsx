import Link from 'next/link';
import { useRouter } from 'next/router';
import { JumpOptions } from '../../../../interfaces';
import { smoothJump } from '../../../../utils';

interface NavItemInterface {
  href?: string;
  jumpOptions?: JumpOptions;
}

const NavItem: React.FC<NavItemInterface> = ({
  children,
  href,
  jumpOptions,
}) => {
  const router = useRouter();

  const onClickHandler = () => {
    if (router.query.id) {
      router
        .push('/')
        .then(() => smoothJump(jumpOptions!))
        .catch(err => console.log(err));
    } else {
      smoothJump(jumpOptions!);
    }
  };

  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <li className="leading-[21px] smooth relative mx-4 cursor-pointer font-medium hover:text-blue after:absolute after:left-[50%] after:bottom-[-3px] after:translate-x-[-50%] after:scale-x-0 after:h-[1.5px] after:bg-blue after:transition-all after:duration-[270ms] after:w-[96%] hover:after:translate-x-[-50%] hover:after:scale-100 xl:mx-3 xl:text-[15px]">
            {children}
          </li>
        </Link>
      ) : (
        <li
          onClick={onClickHandler}
          className="leading-[21px] smooth relative mx-4 cursor-pointer font-medium hover:text-blue after:absolute after:left-[50%] after:bottom-[-3px] after:translate-x-[-50%] after:scale-x-0 after:h-[1.5px] after:bg-blue after:transition-all after:duration-[270ms] after:w-[96%] hover:after:translate-x-[-50%] hover:after:scale-100 xl:mx-3 xl:text-[15px]"
        >
          {children}
        </li>
      )}
    </>
  );
};

export default NavItem;
