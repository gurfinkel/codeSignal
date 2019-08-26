#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub minimalMultiple {
    my ($divisor, $lowerBound) = @_;

    return $lowerBound % $divisor ? $divisor * (~~($lowerBound / $divisor) + 1) : $lowerBound;
}
