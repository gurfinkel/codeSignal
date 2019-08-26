#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub arePrizesOK {
    my ($first, $second, $third) = @_;

    return $first >= $second && $second >= $third ? 1 : 0;
}
