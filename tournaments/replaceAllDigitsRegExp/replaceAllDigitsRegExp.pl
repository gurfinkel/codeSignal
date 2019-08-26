#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub replaceAllDigitsRegExp {
    my ($input) = @_;

    $input =~ s/\d/ '#'/ge;

    return $input;
}
