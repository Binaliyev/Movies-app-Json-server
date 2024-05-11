import { motion } from "framer-motion"

export const CardFooter = ({ whileHover, whileFocus, whileTap, initial,whileInView,transition, animate, whileDrag, img, color, textColor, width, height, padding, marginX, marginY, imgSize, border, children, className }) => {
    return (
        <>
            <motion.div
                initial={initial ? initial : null}
                whileInView={whileInView ? whileInView : null}
                animate={animate ? animate : null}
                whileDrag={whileDrag ? whileDrag : null}
                whileTap={whileTap ? whileTap : null}
                whileFocus={whileFocus ? whileFocus : null}
                whileHover={whileHover ? whileHover : null}
                transition={transition ? transition : null}
                className={className}
                style={img ? {
                    background: `url(${img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: imgSize,
                    backgroundPozition: "center",
                    width: `${width ? width : 0}`,
                    height: `${height ? height : 0}rem`,
                    textAlign: "center",
                    position: "relative",
                    color: `${textColor ? textColor : null}`,
                    width: width && width === `100%` ? `${width ? width : `auto`}` : `${width ? width : 0}rem`,
                    height: height && height === `auto` ? `${height ? height : `auto`}` : `${height ? height : 0}rem`,
                    marginLeft: marginX && marginX === `auto` ? `${marginX ? marginX : 0}` : `${marginX ? marginX : 0}rem`,
                    marginRight: marginX && marginX === `auto` ? `${marginX ? marginX : 0}` : `${marginX ? marginX : 0}rem`,
                    top: `${marginY ? marginY : 0}px`,
                    bottom: `${marginY ? marginY : 0}px`,
                    borderRadius: `${border ? border : 0}px`
                } : {
                    backgroundColor: `${color ? color : null}`,
                    color: `${textColor ? textColor : null}`,
                    width: width && width === `100%` ? `${width ? width : `auto`}` : `${width ? width : 0}rem`,
                    height: height && height === `auto` ? `${height ? height : `auto`}` : `${height ? height : 0}rem`,
                    padding: padding ? `${padding}px` : null,
                    marginLeft: marginX && marginX === `auto` ? `${marginX ? marginX : 0}` : `${marginX ? marginX : 0}rem`,
                    marginRight: marginX && marginX === `auto` ? `${marginX ? marginX : 0}` : `${marginX ? marginX : 0}rem`,
                    textAlign: "center",
                    position: "relative",
                    top: `${marginY ? marginY : 0}px`,
                    bottom: `${marginY ? marginY : 0}px`,
                    borderRadius: `${border ? border : 0}px`
                }}
            >
                {children ? children : null}
            </motion.div>
        </>
    )
}